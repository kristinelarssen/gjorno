# Generated by Django 3.1.6 on 2021-03-18 14:00

from django.db import migrations


class Migration(migrations.Migration):
    def alter_annet_field(api, schema_editor):
        Activity = api.get_model("api", "Activity")

        for activity in Activity.objects.filter(genre="AN"):
            activity.genre = "Annet"
            activity.save()

    dependencies = [
        ("api", "0010_merge_20210318_1352"),
    ]

    operations = [migrations.RunPython(alter_annet_field, migrations.RunPython.noop)]