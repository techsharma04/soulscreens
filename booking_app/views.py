from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
import json
from .models import booking_collection

@csrf_exempt
def add_booking(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            
            if email and password:
                booking_collection.insert_one({
                    'email': email,
                    'password': password
                })
                return JsonResponse({'message': 'New booking is added'}, status=201)
            else:
                return JsonResponse({'error': 'Invalid data'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


def index(request):
    return render(request, "index.html")

@require_POST
def login(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            return JsonResponse({'error': 'Email and password are required'}, status=400)
        
        user = booking_collection.find_one({'email': email, 'password': password})
        
        if user:
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid email or password'}, status=401)
    
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)