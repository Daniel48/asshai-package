@component('mail::message')
# Introduction

Esta es una nueva consulta de {{$name}}
<br>
Mensaje:
{{$message}}

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
