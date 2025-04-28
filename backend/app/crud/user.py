from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.ext import IntegrityError

from app import models, schemas
from app.core.security import get_password_hash, verify_password


async def create_user(db: AsyncSession, user: schemas.UserCreate) -> models.User:
    """
    Create a new user in the database.
    """
    db_user = models.User(
        username=user.username,
        email=user.email,
        # full_name=user.full_name,
        hashed_password=get_password_hash(user.password),
    )
    db.add(db_user)
    try:
        await db.commit()
        await db.refresh(db_user)
    except IntegrityError:
        await db.rollback()
        raise ValueError("Username or email already exists")

    return db_user


async def get_user(db: AsyncSession, user_id: int) -> models.User:
    """
    Get a user by ID.
    """
    result = await db.execute(select(models.User).where(models.User.id == user_id))
    return result.scalars().first()


async def get_user_by_username(db: AsyncSession, username: str) -> models.User:
    """
    Get a user by username.
    """
    result = await db.execute(select(models.User).where(models.User.username == username))
    return result.scalars().first()


async def get_user_by_email(db: AsyncSession, email: str) -> models.User:
    """
    Get a user by email.
    """
    result = await db.execute(select(models.User).where(models.User.email == email))
    return result.scalars().first()


async def get_user_by_username_or_email(db: AsyncSession, username: str, email: str) -> models.User:
    """
    Get a user by username or email.
    """
    result = await db.execute(
        select(models.User).where(
            (models.User.username == username) | (models.User.email == email)
        )
    )
    return result.scalars().first()


async def authenticate_user(db: AsyncSession, username: str, password: str) -> models.User | None:
    """
    Authenticate a user by username and password.
    """
    user = await get_user_by_username(db, username)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None

    return user
