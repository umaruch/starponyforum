from django.contrib import admin
from .models import Theme, Message
# Register your models here.
@admin.register(Theme)
class ThemeAdmin(admin.ModelAdmin):
    list_display = ('author','title','date')

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('theme','author','date')