<template>
  <div class="container">
    <h2 class="teal-text">Notifications</h2>
    <div class="divider"></div>
    <br>

    <ul class="collection with-header">
      <li class="collection-header"><h4>{{ new Date().toDateString() }}</h4></li>
      <li class="collection-item"><div><i class="material-icons left blue-text">info</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>
      <li class="collection-item"><div><i class="material-icons left green-text">check_circle</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>

      <li class="collection-header"><h4>{{ new Date(new Date().setDate(new Date().getDate()-1)).toDateString() }}</h4></li>
      <li class="collection-item"><div><i class="material-icons left orange-text">warning</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>
      <li class="collection-item"><div><i class="material-icons left red-text">error</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>
      <li class="collection-item"><div><i class="material-icons left blue-text">info</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>

      <li class="collection-header"><h4>{{ new Date(new Date().setDate(new Date().getDate()-2)).toDateString() }}</h4></li>
      <li class="collection-item"><div><i class="material-icons left orange-text">warning</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>
      <li class="collection-item"><div><i class="material-icons left blue-text">info</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>

      <li class="collection-header"><h4>{{ new Date(new Date().setDate(new Date().getDate()-3)).toDateString() }}</h4></li>
      <li class="collection-item"><div><i class="material-icons left green-text">check_circle</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>
      <li class="collection-item"><div><i class="material-icons left green-text">check_circle</i>Notification<a href="#!" class="secondary-content grey-text"><i class="material-icons">delete</i></a></div></li>

    </ul>

  </div>

</template>
