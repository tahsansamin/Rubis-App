from rest_framework import serializers
from fuelbackend.models import DailyElectronics,DailyExpense,DailyFuelSales,DailyMeter,NewExpense,Expense,CurrentStock,Buy_fuel,Banking
class ElectronicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DailyElectronics
        fields = '__all__'

class BankSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Banking
        fields = '__all__'



class ExpenseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DailyExpense
        fields = '__all__'


class ESerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'


class NewExpenseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NewExpense
        fields = '__all__'


class FuelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DailyFuelSales
        fields = '__all__'

class MeterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DailyMeter
        fields = '__all__'


class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CurrentStock
        fields = '__all__'

class BuySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Buy_fuel
        fields = '__all__'
