from django.db import models


class Activity(models.Model):
    title = models.CharField(max_length=150)
    created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default="")
    date = models.DateTimeField()

    class ActivityGenre(models.TextChoices):
        ANNET = 'Annet'
        TUR = 'Spasertur'
        LOP = 'Løping'

    genre = models.CharField(
        max_length=10, choices=ActivityGenre.choices,
        default=ActivityGenre.ANNET, 
    )


    class Meta:
        verbose_name_plural = "Activities"

    def __str__(self):
        return self.title
