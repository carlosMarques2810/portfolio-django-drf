from django.db import models
from io import BytesIO
from PIL import Image
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project/')
    url_github = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        db_table = 'projetos'
        verbose_name = 'Projeto'
        verbose_name_plural = 'Projetos'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        im = Image.open(self.image)
        if im.width > 800:
            output_size = (800, 800)
            im.thumbnail(output_size, Image.LANCZOS)
        
        output = BytesIO()
        im.save(output, format='WebP', optimize=True, quality=85)
        output.seek(0)
        self.image = InMemoryUploadedFile(
            output,
            'ImageField',
            f'{self.image.name.split(".")[0]}.webp',
            'image/webp', 
            sys.getsizeof(output),
            None
        )

        return super().save(*args, **kwargs)