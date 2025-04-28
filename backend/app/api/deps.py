from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.ext.asyncio import AsyncSession

from typing import AsyncGenerator

from app.db.session import AsyncSessionLocal
from app.core.config import settings
from app.core import security
from app import crud

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/login")


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """
    Dependency that provides a database session for the duration of a request.
    """
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()


async def get_current_user(token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)):
    """
    Retrieves the current user from the database using the provided token.
    """
    token_data = security.verify_access_token(token)
    user = await crud.user.get_user_by_username(db, username=token_data.username)
    if user is None:
        raise HTTPException(
            status_code=401, detail="Invalid authentication credentials", headers={"WWW-Authenticate": "Bearer"})
    return user
