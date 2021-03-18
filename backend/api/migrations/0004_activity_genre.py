# Generated by Django 3.1.6 on 2021-03-11 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210224_1542'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='genre',
            field=models.CharField(choices=[('AN', 'Annet'), ('TUR', 'Spasertur'), ('LOP', 'Løping')], default='AN', max_length=3),
        ),
    ]
