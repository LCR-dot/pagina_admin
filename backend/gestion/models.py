from django.db import models
from django.contrib import admin

class City(models.Model):
    id = models.AutoField(primary_key=True)  # corresponde al id de la tabla
    name = models.CharField(max_length=100)  # nombre de la ciudad
    countrycode = models.CharField(max_length=3)  # código del país (ISO 3 letras)
    district = models.CharField(max_length=100)  # distrito o región
    population = models.IntegerField()  # población de la ciudad

    class Meta:
        ordering = ['name']  # ordena por nombre por defecto
        verbose_name = "City"
        verbose_name_plural = "Cities"

    def __str__(self):
        return f"{self.name}, {self.countrycode}"

# Registro en Django Admin
@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'countrycode', 'district', 'population')
    search_fields = ('name', 'countrycode', 'district')
    list_filter = ('countrycode', 'district')
    ordering = ('name',)