# django_app/serializers.py
from rest_framework import serializers
from .models import Teacher
from .models import CustomUser, NewsletterSubscriber
from .models import ContactFormSubmission



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id','username', 'full_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            full_name=validated_data['full_name'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class ContactFormSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormSubmission
        fields = ['id', 'user', 'name', 'email', 'message', 'created_at']
        read_only_fields = ['created_at']

class NewsletterSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = ['email', 'subscribed_at']


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'