# Generated by Django 3.1.6 on 2021-03-11 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_activity_genre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='genre',
            field=models.CharField(choices=[('ANNET', 'Annet'), ('TUR', 'Spasertur'), ('LOP', 'Løping')], default='ANNET', max_length=5),
        ),
    ]