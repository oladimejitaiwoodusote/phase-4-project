"""empty message

Revision ID: 32116b609977
Revises: 06117c26fb89
Create Date: 2023-05-09 11:12:21.780635

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '32116b609977'
down_revision = '06117c26fb89'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pets', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pets', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###