from django.contrib import admin
from .models import DailyElectronics,DailyFuelSales,DailyMeter,Expense,CurrentStock,Buy_fuel,Banking
# Register your models here.
admin.site.register(DailyFuelSales)
admin.site.register(DailyElectronics)
admin.site.register(Expense)
admin.site.register(CurrentStock)
admin.site.register(DailyMeter)
admin.site.register(Buy_fuel)
admin.site.register(Banking)



