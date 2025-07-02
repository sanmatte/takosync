from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.exc import IntegrityError

from app import models, schemas
from app.core.security import hash_password, verify_password


async def create_link(db: AsyncSession, link: schemas.LinkCreate) -> models.Link:
    new_link = models.Link(
        url=link.url,
        name=link.name,
        description=link.description,
        user_id=link.user_id
    )
    db.add(new_link)
    try:
        await db.commit()
        await db.refresh(new_link)
    except IntegrityError:
        await db.rollback()
        raise ValueError("Link already exists")

    return new_link


async def get_all_links(db: AsyncSession, user_id: int) -> list[models.Link]:
    result = await db.execute(select(models.Link).where(models.Link.user_id == user_id))
    return result.scalars().all()


async def get_latest_link(db: AsyncSession, user_id: int) -> models.Link | None:
    result = await db.execute(
        select(models.Link)
        .where(models.Link.user_id == user_id)
        .order_by(models.Link.created_at.desc())
        .limit(1)
    )
    return result.scalar_one_or_none()


async def delete_link(db: AsyncSession, link_id: int, user_id: int) -> bool:
    result = await db.execute(
        select(models.Link).where(models.Link.id == link_id, models.Link.user_id == user_id)
    )
    link = result.scalar_one_or_none()
    
    if not link:
        return False
    
    await db.delete(link)
    await db.commit()
    return True
