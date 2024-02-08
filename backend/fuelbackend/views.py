from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .serializers import ElectronicSerializer, ExpenseSerializer, FuelSerializer, MeterSerializer, NewExpenseSerializer, ESerializer, StockSerializer,BuySerializer,BankSerializer
from fuelbackend.models import DailyElectronics, DailyExpense, DailyFuelSales, DailyMeter, NewExpense, Expense, CurrentStock,Buy_fuel,Banking
from rest_framework import viewsets
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from backend.utils import update_csv

import csv
# Create your views here.


class ElecView(viewsets.ModelViewSet):
    queryset = DailyElectronics.objects.all()
    serializer_class = ElectronicSerializer

    def get_queryset(self):
        queryset = DailyElectronics.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset

    def perform_create(self, serializer):
        instance = serializer.save()
        data = [instance.date, instance.momo_pay,
                instance.rubis_card_pay, instance.airtel_pay, instance.cd_pay]
        update_csv('electronics.csv', data)


class NewExpenseView(viewsets.ModelViewSet):
    queryset = NewExpense.objects.all()
    serializer_class = NewExpenseSerializer

    def get_queryset(self):
        queryset = DailyExpense.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset

    


class FuelView(viewsets.ModelViewSet):
    queryset = DailyFuelSales.objects.all()
    serializer_class = FuelSerializer

    def get_queryset(self):
        queryset = DailyFuelSales.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset

    def perform_create(self, serializer):
        instance = serializer.save()
        data = [instance.date, instance.lubs, instance.gas, instance.pms_volumne, instance.diesel_volume,
                instance.pms_price, instance.diesel_price, instance.diesel_sales, instance.pms_sales]
        update_csv('fuel.csv', data)


# class BuyView(viewsets.ModelViewSet):
#     queryset = Buyfuel.objects.all()
#     serializer_class = BuySerializer

#     def get_queryset(self):
#         queryset = Buyfuel.objects.all()
#         date_param = self.request.query_params.get('date')

#         if date_param:
#             try:
#                 specific_date = datetime.strptime(
#                     date_param, '%Y-%m-%d').date()
#                 queryset = queryset.filter(date=specific_date)
#             except ValueError:
#                 # Handle invalid date format
#                 pass

#         return queryset

class MeterView(viewsets.ModelViewSet):
    queryset = DailyMeter.objects.all()
    serializer_class = MeterSerializer

    def get_queryset(self):
        queryset = DailyMeter.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset

    def perform_create(self, serializer):
        instance = serializer.save()
        data = [instance.date, instance.openingpms1, instance.openingpms2, instance.openingpms3, instance.openingpms4, instance.openingdiesel1, instance.openingdiesel2, instance.openingdiesel3, instance.openingdiesel4, instance.closingpms1, instance.closingpms2, instance.closingpms3, instance.closingpms4,
                instance.closingdiesel1, instance.closingdiesel2, instance.closingdiesel3, instance.closingdiesel4, instance.pms1, instance.pms2, instance.pms3, instance.pms4, instance.diesel1, instance.diesel2, instance.diesel3, instance.diesel4, instance.pms, instance.diesel]
        update_csv('meter.csv', data)

    # def perform_update(self, serializer):
    #     instance = serializer.save()
    #     self.update_csv_with_instance(instance)

    # def update_csv_with_instance(self, instance):
    #     data = [instance.date, instance.openingpms1, instance.openingpms2, instance.openingpms3, instance.openingpms4, instance.openingdiesel1, instance.openingdiesel2, instance.openingdiesel3, instance.openingdiesel4, instance.closingpms1, instance.closingpms2, instance.closingpms3, instance.closingpms4,
    #             instance.closingdiesel1, instance.closingdiesel2, instance.closingdiesel3, instance.closingdiesel4, instance.pms1, instance.pms2, instance.pms3, instance.pms4, instance.diesel1, instance.diesel2, instance.diesel3, instance.diesel4, instance.pms, instance.diesel]
    #     self.update_csv('meter.csv', instance.date, data)

    # def update_csv(self, file_path, date, data):
    #     rows_to_keep = []
    #     with open(file_path, 'r', newline='') as csvfile:
    #         reader = csv.reader(csvfile)
    #         for row in reader:
    #             row_date = row[0]
    #             if row_date == str(date):
    #                 rows_to_keep.append(data)
    #             else:
    #                 rows_to_keep.append(row)

    #     with open(file_path, 'w', newline='') as csvfile:
    #         writer = csv.writer(csvfile)
    #         writer.writerows(rows_to_keep)


class ExpenseView(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ESerializer

    def get_queryset(self):
        queryset = Expense.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset



class StockView(viewsets.ModelViewSet):
    queryset = CurrentStock.objects.all()
    serializer_class = StockSerializer

    
class BView(viewsets.ModelViewSet):
    queryset = Buy_fuel.objects.all()
    serializer_class = BuySerializer

    def get_queryset(self):
        queryset = Buy_fuel.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset
    

class BankView(viewsets.ModelViewSet):
    queryset = Banking.objects.all()
    serializer_class = BankSerializer

    def get_queryset(self):
        queryset = Banking.objects.all()
        date_param = self.request.query_params.get('date')

        if date_param:
            try:
                specific_date = datetime.strptime(
                    date_param, '%Y-%m-%d').date()
                queryset = queryset.filter(date=specific_date)
            except ValueError:
                # Handle invalid date format
                pass

        return queryset
