from django.db import models


#Entidad Producto
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    image_url = models.CharField(max_length=2083)
    slug = models.SlugField(max_length=255, unique=True)
    featured = models.BooleanField(default=False)
    url = models.CharField(max_length=2083)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = 'Products'
    
#Entidad Categoria
class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'Categories'

#Entidad Marca
class Brand(models.Model):
    name = models.CharField(max_length=255)
    logo = models.CharField(max_length=2083)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = 'Brands'