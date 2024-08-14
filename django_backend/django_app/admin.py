# django_app/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, ContactFormSubmission

# Custom UserAdmin to manage CustomUser model in the admin panel
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'full_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'groups')
    search_fields = ('username', 'email', 'full_name')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('full_name', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'full_name', 'email', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}
        ),
    )

# Register the CustomUser model with the custom admin class
admin.site.register(CustomUser, CustomUserAdmin)

# Admin class for ContactFormSubmission
class ContactFormSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message', 'created_at', 'user')
    search_fields = ('name', 'email', 'message')
    list_filter = ('created_at',)
    readonly_fields = ('created_at',)

# Register the ContactFormSubmission model
admin.site.register(ContactFormSubmission, ContactFormSubmissionAdmin)
