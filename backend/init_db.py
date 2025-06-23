# Location: initial_db_async.py (in project root)

import asyncio
import os
import sys
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Add the 'app' directory to the Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '.')))

# --- Import the ASYNC engine ---
# Make sure session.py defines async_engine using "postgresql+asyncpg://..."
from app.db.session import async_engine

# --- Import Base and ALL Models ---
from app.db.base import Base
from app.models import *

async def create_db_and_tables():
    logger.info("Attempting connect and run sync create_all...")
    try:
        async with async_engine.begin() as conn:
            # Use run_sync to execute the synchronous metadata.create_all
            await conn.run_sync(Base.metadata.create_all)
        logger.info("Tables created successfully via run_sync (or already exist).")
    except ImportError:
         logger.error("ImportError during table creation. Do you have necessary drivers installed (e.g., potentially 'psycopg2-binary' even for run_sync)?")
    except Exception as e:
        logger.error(f"An error occurred during table creation: {e}", exc_info=True)
    finally:
        # Dispose the engine when done - important in scripts
        await async_engine.dispose()
        logger.info("Async engine disposed.")

if __name__ == "__main__":
    logger.info("Running async table creation...")
    # Run the async function using asyncio
    asyncio.run(create_db_and_tables())
    logger.info("Script finished.")
