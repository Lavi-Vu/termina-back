from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpRequest
from urllib import request
import time
from pycoingecko import CoinGeckoAPI
import json

# Create your views here.
class Home():
    def index(request):
        return render(request,'site/content/index.html')
    def market(request):
        return render(request,'site/content/market.html')
    def RaiseCapital(request):
        return render(request,'site/content/raise-capital.html')
    def developer(request):
        return render(request,'site/content/developer.html')
    def ecosystem(request):
        return render(request,'site/content/ecosystem.html')
    def about(request):
        return render(request,'site/content/about.html')
    # def test(request):
    #     cg = CoinGeckoAPI()
    #     coin_prices ={}
    #     for i in range (0,10):
    #         temp=cg.get_price(ids='bitcoin',vs_currencies='usd')
    #         coin_price = temp['bitcoin']['usd']
    #         print(coin_price)
    #         coin_prices=coin_price
    #     for cp in coin_prices:
    #         print('day la coin_price:',coin_prices)

        # get account address from js 
        # account = request.GET.get('account', None)
        # Any process that you want
        # data = {
            # Data that you want to send to javascript function
        # }
        # print(account)
    
        # return render(request,'site/content/test2.html',{'coin_prices' : coin_prices})
    # def my_def_in_view(request):
    #     result = request.GET.get('result', None)
    #     # Any process that you want
    #     data = {
    #             # Data that you want to send to javascript function
    #     }
    #     return JsonResponse(data)