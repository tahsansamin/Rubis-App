"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from . import views
from rest_framework import routers

from fuelbackend import views

router = routers.DefaultRouter()
router.register(r'elect', views.ElecView)
router.register(r'met', views.MeterView)
router.register(r'fu', views.FuelView)

router.register(r'newexep', views.NewExpenseView)
router.register(r'e', views.ExpenseView)
router.register(r'stock', views.StockView)
# router.register(r'buy',views.BuyView)
router.register(r'b',views.BView)
router.register(r'banking',views.BankView)



urlpatterns = [
    path('admin/', admin.site.urls),


    path('', TemplateView.as_view(template_name='index.html')),
    path('', include(router.urls)),
    






]
