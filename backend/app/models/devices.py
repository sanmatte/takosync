from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Device(Base):
    __tablename__ = 'devices'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)
    status = Column(String, nullable=False)
    ip_address = Column(String, nullable=False)
    mac_address = Column(String, nullable=False)
    location = Column(String, nullable=False)
    created_at = Column(String, nullable=False)
    last_used = Column(String, nullable=False)

    # Relationships
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship("User", back_populates="devices")

    def __repr__(self):
        return f"<Device(name={self.name}, type={self.type}, status={self.status})>"
