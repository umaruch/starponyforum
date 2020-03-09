# Generated by Django 3.0.4 on 2020-03-08 10:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forummain', '0002_auto_20200308_1506'),
    ]

    operations = [
        migrations.AlterField(
            model_name='theme',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]
