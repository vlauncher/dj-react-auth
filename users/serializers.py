from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError 

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','first_name','last_name','email','password')
    
    def clean_email(value):
        user = User.objects.filter(email=value)
        if user.exists():
            raise ValidationError('Email Already Registerd')
        return value