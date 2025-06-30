from pydantic import BaseModel, Field, EmailStr
from typing import Optional


class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr = Field(..., max_length=100)


class UserCreate(UserBase):
    password: str = Field(..., min_length=12, max_length=128)


class UserUpdate(UserBase):
    email: Optional[EmailStr] = None
    password: Optional[str] = Field(None, min_length=12, max_length=128)


class UserResponse(UserBase):
    id: int
    username: str
    email: EmailStr

    class Config:
        # orm_mode = True
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    # expires_in: int = 3600


class TokenData(BaseModel):
    sub: Optional[str] = None
