# Generated by Django 4.1.7 on 2023-03-04 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("color", models.CharField(max_length=6)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
