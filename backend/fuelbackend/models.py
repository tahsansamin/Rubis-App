from django.db import models


class DailyExpense(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()


class NewExpense(models.Model):
    name = models.CharField(max_length=100)
    amount = models.FloatField(default=0)
    date = models.DateField()


class Expense(models.Model):
    # name = models.CharField(max_length=100)
    # amount = models.FloatField(default=0)
    date = models.DateField()

    garbage = models.FloatField(default=0)
    liquid_soap = models.FloatField(default=0)
    car_fuel = models.FloatField(default=0)
    food = models.FloatField(default=0)
    broom = models.FloatField(default=0)
    transport = models.FloatField(default=0)
    airtime = models.FloatField(default=0)
    price_survey = models.FloatField(default=0)
    hosepipe_rubber = models.FloatField(default=0)
    salary = models.FloatField(default=0)
    staff_advance = models.FloatField(default=0)
    water_bill = models.FloatField(default=0)
    generator = models.FloatField(default=0)
    shorteg = models.FloatField(default=0)
    others = models.FloatField(default=0)


class DailyFuelSales(models.Model):
    pms_price = models.FloatField(default=0)
    diesel_price = models.FloatField(default=0)
    pms_sales = models.FloatField(default=0)
    diesels_sales = models.FloatField(default=0)
    lubs = models.FloatField(default=0)
    gas = models.FloatField(default=0)
    others = models.FloatField(default=0)
    date = models.DateField()


class DailyMeter(models.Model):
    openingpms1 = models.FloatField(default=0)
    openingpms2 = models.FloatField(default=0)
    openingpms3 = models.FloatField(default=0)
    openingpms4 = models.FloatField(default=0)
    dippingpms = models.FloatField(default=0)
    openingdiesel1 = models.FloatField(default=0)
    openingdiesel2 = models.FloatField(default=0)
    openingdiesel3 = models.FloatField(default=0)
    openingdiesel4 = models.FloatField(default=0)
    closingpms1 = models.FloatField(default=0)
    closingpms2 = models.FloatField(default=0)
    closingpms3 = models.FloatField(default=0)
    closingpms4 = models.FloatField(default=0)
    closingdiesel1 = models.FloatField(default=0)
    closingdiesel2 = models.FloatField(default=0)
    closingdiesel3 = models.FloatField(default=0)
    closingdiesel4 = models.FloatField(default=0)
    pms1 = models.FloatField(default=0)
    pms2 = models.FloatField(default=0)
    pms3 = models.FloatField(default=0)
    pms4 = models.FloatField(default=0)
    diesel1 = models.FloatField(default=0)
    diesel2 = models.FloatField(default=0)
    diesel3 = models.FloatField(default=0)
    diesel4 = models.FloatField(default=0)
    pms = models.FloatField(default=0)
    diesel = models.FloatField(default=0)
    pms_rtt = models.FloatField(default=0)
    ago_rtt = models.FloatField(default=0)
    dippingago = models.FloatField(default=0)

    date = models.DateField()


class DailyElectronics(models.Model):
    momo_pay = models.FloatField(default=0)
    rubis_card_pay = models.FloatField(default=0)
    airtel_pay = models.FloatField(default=0)
    cd_pay = models.FloatField(default=0)
    app_pay = models.FloatField(default=0)
    date = models.DateField()


class CurrentStock(models.Model):
    pms_stock = models.FloatField(default=0)
    diesel_stock = models.FloatField(default=0)


# class Buyfuel(models.Model):
#     pms_bought = models.FloatField(default=0)
#     diesel_bought = models.FloatField(default=0)
#     pms_rate = models.FloatField(default=0)
#     diesel_rate = models.FloatField(default=0)
#     dealer_fee = models.FloatField(default=0)
#     date = models.DateField()


class Buy_fuel(models.Model):
    pms_bought = models.FloatField(default=0)
    diesel_bought = models.FloatField(default=0)
    pms_rate = models.FloatField(default=0)
    diesel_rate = models.FloatField(default=0)
    dealer_fee = models.FloatField(default=0)
    date = models.DateField()

class Banking(models.Model):
    my_banking = models.FloatField(default=0)
    station_banking = models.FloatField(default=0)
    difference = models.FloatField(default=0)
    date = models.DateField()
