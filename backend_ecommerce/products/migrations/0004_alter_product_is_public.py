# Generated by Django 5.0 on 2024-03-26 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_alter_product_is_public'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='is_public',
            field=models.BooleanField(null=True),
        ),
    ]
