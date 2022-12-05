"""empty message

Revision ID: 124af5bb2550
Revises: 8aac98a11cfc
Create Date: 2022-12-05 10:39:09.928122

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '124af5bb2550'
down_revision = '8aac98a11cfc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###