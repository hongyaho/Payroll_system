# Generated by Django 2.2.9 on 2021-05-28 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_remove_user_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='employee_id',
        ),
        migrations.AddField(
            model_name='user',
            name='tel',
            field=models.CharField(blank=True, max_length=255, verbose_name='전화번호'),
        ),
    ]
