from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL, echo=True)
Session = sessionmaker(bind=engine)


# def get_db():
#     """
#     Returns a new session to the database.
#     """
#     db = Session()
#     try:
#         yield db
#     finally:
#         db.close()
