from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.api.deps import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate, UserResponse
from app.core.security import hash_password, verify_password
from app import crud

router = APIRouter(
    # prefix="/users",
    # tags=["users"],
)


@router.post("/register", response_model=UserResponse)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    is_email_taken = await db.execute(select(User).filter(User.email == user.email))
    is_username_taken = await db.query(User).filter(User.username == user.username).first()
    if is_email_taken:
        raise HTTPException(status_code=400, detail="Email already registered")
    if is_username_taken:
        raise HTTPException(
            status_code=400, detail="Username already registered")
    if len(user.password) < 12:
        raise HTTPException(
            status_code=400, detail="Password must be at least 12 characters long")

    new_user = crud.create_user(db=db, user=user)
    return new_user
