from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
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
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    db_user = db.query(User).filter(User.username == user.username).first()
    if db_user:
        raise HTTPException(
            status_code=400, detail="Username already registered")
    if len(user.password) < 12:
        raise HTTPException(
            status_code=400, detail="Password must be at least 12 characters long")

    new_user = crud.create_user(db=db, user=user)
    return new_user


@router.post("/login", response_model=UserResponse)
def login_user(user: UserCreate, db: Session = Depends(get_db)):
    # FIX: do better validation 
    db_user = db.query(User).filter(
        User.email == user.email or User.username == user.username).first()
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return db_user


# @router.get("/me", response_model=UserResponse)
# def get_current_user(current_user: User = Depends(get_current_active_user)):
#     return current_user
