from django.shortcuts import render
#from .models import DailyElectronics,DailyExpense,DailyFuelSales,DailyMeter,DailySales
from rest_framework.response import Response
from rest_framework.decorators import api_view



def index(request):
    return render(request,'index.html')



# def add_daily_expense(request):
#     if request.method == 'POST':
#         name = request.POST.get('name')
#         amount = request.POST.get('amount')
#         date = request.POST.get('date')

#         expense = DailyExpense(name=name, amount=amount, date=date)
#         expense.save()

# def add_daily_electronics(request):
#     if request.method == 'POST':
#         momo_pay = request.POST.get('momo_pay')
#         rubis_card_pay = request.POST.get('rubis_card_pay')
#         airtel_pay = request.POST.get('airtel_pay')
#         cd_pay = request.POST.get('cd_pay')
#         date = request.POST.get('date')

        
#         expense = DailyElectronics(momo_pay=momo_pay, rubis_card_pay=rubis_card_pay, airtel_pay=airtel_pay,cd_pay=cd_pay,date=data)
        
#         expense.save()