# Generated by Django 3.1.6 on 2021-03-25 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='activity',
            name='participants',
            field=models.ManyToManyField(blank=True, related_name='participates_in', to='api.UserProfile'),
        ),
    ]
