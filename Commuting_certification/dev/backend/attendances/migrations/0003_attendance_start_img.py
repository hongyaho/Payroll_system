# Generated by Django 2.2.9 on 2021-05-28 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendances', '0002_auto_20210528_1836'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='start_img',
            field=models.ImageField(blank=True, null=True, upload_to='attendances/img'),
        ),
    ]
