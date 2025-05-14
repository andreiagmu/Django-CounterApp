from django.urls import path

from counter.views import get_counter, increment_counter, decrement_counter, reset_counter

urlpatterns = [
    path('get-counter/', get_counter, name='get-counter'),
    path('increment-counter/', increment_counter, name='increment-counter'),
    path('decrement-counter/', decrement_counter, name='decrement-counter'),
    path('reset-counter/', reset_counter, name='reset-counter'),
]
