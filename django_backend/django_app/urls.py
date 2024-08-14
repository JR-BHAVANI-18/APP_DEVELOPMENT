from django.urls import include, path
from .views import (
    TeacherViewSet,
    contact_form_submission,
    newsletter_signup,
    signup,
    login_view,
    UserListView,
    UserDetailView
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'teachers', TeacherViewSet)


urlpatterns = [
    path('api/signup/', signup, name='signup'),
    path('api/login/', login_view, name='login'),
    path('api/contact/', contact_form_submission, name='contact_form_submission'),
    path('api/users/', UserListView.as_view(), name='user_list'),
    path('api/users/<int:user_id>/', UserDetailView.as_view(), name='user_detail'),
    path('api/newsletter/', newsletter_signup, name='newsletter_signup'),
     path('api/', include(router.urls))
]
 