<template>
  <div class="container">
    <h2 class="teal-text">History</h2>
    <div class="divider"></div>
    <br>

    <div id="timeline">
			<div class="timeline-item">
				<div class="timeline-icon teal">
          <i class="material-icons">payment</i>
				</div>
				<div class="timeline-content">
					<h4>{{ new Date(new Date().setDate(new Date().getDate())).toDateString() }}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon red lighten-3">
          <i class="material-icons">error_outline</i>
				</div>
				<div class="timeline-content right">
					<h4>{{ new Date(new Date().setDate(new Date().getDate()-1)).toDateString() }}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">
          <i class="material-icons">new_releases</i>
				</div>
				<div class="timeline-content">
					<h4>{{ new Date(new Date().setDate(new Date().getDate()-2)).toDateString() }}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</div>
			</div>

      <div class="timeline-item">
				<div class="timeline-icon">
          <i class="material-icons">fiber_new</i>
				</div>
				<div class="timeline-content">
					<h4>{{ new Date(new Date().setDate(new Date().getDate()-3)).toDateString() }}</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
				</div>
			</div>
		</div>

  </div>
</template>

<style scoped>
#timeline .timeline-item:after, #timeline .timeline-item:before {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}

#timeline {
  color: #726f77;
  width: 100%;
  margin: 30px auto;
  position: relative;
  padding: 0 10px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

#timeline:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #80cbc4;
  left: 50%;
  top: 0;
  position: absolute;
}

#timeline:after {
  content: "";
  clear: both;
  display: table;
  width: 100%;
}

#timeline .timeline-item {
  margin-bottom: 50px;
  position: relative;
}

#timeline .timeline-item .timeline-icon {
  background: #80cbc4;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  margin-left: -23px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}

#timeline .timeline-item .timeline-icon i {
  position: relative;
  top: 13px;
  left: 13px;
  color: #fff;
}

#timeline .timeline-item .timeline-content {
  width: 45%;
  background: #fefefe;
  padding: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: 1px 5px 5px #eee;
}

#timeline .timeline-item .timeline-content h4 {
  padding: 15px;
  background: #80cbc4;
  color: #fff;
  margin: -20px -20px 0 -20px;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  -ms-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}

#timeline .timeline-item .timeline-content:before {
  content: '';
  position: absolute;
  left: 45%;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid #80cbc4;
}

#timeline .timeline-item .timeline-content.right {
  float: right;
}

#timeline .timeline-item .timeline-content.right:before {
  content: '';
  right: 45%;
  left: inherit;
  border-left: 0;
  border-right: 7px solid #80cbc4;
}

@media screen and (max-width: 768px) {
  #timeline {
    margin: 30px;
    padding: 0px;
    width: 90%;
  }

  #timeline:before {
    left: 0;
  }

  #timeline .timeline-item .timeline-content {
    width: 90%;
    float: right;
  }

  #timeline .timeline-item .timeline-content:before, #timeline .timeline-item .timeline-content.right:before {
    left: 10%;
    margin-left: -6px;
    border-left: 0;
    border-right: 7px solid #80cbc4;
  }

  #timeline .timeline-item .timeline-icon {
    left: 0;
  }
}

</style>
