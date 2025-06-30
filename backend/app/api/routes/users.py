from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.api.deps import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate, UserResponse, Token
from app.core.security import hash_password, verify_password
from app import crud

router = APIRouter(
    # prefix="/users",
    # tags=["users"],
)


@router.post("/register", response_model=UserResponse)
async def register_user(user: UserCreate, db: Session = Depends(get_db)):
    is_email_taken = await crud.get_user_by_email(db=db, email=user.email)
    is_username_taken = await crud.get_user_by_username(db=db, username=user.username)
    if is_email_taken:
        raise HTTPException(status_code=400, detail="Email already registered")
    if is_username_taken:
        raise HTTPException(
            status_code=400, detail="Username already registered")
    if len(user.password) < 12:
        raise HTTPException(
            status_code=400, detail="Password must be at least 12 characters long")

    new_user = await crud.create_user(db=db, user=user)
    return new_user
