<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container px-4 px-lg-5">
              <a class="navbar-brand" href="#">
              <img src="logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
              Ricky Rynx
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto my-2 my-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Works</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contract</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="Walpaper.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h1>I'm Ricky Rynx</h1>
                    <h2>This Page Is My First Portfolio Design By Vue Application.</h2>
                    <p>Start Bootstrap Can Help You Build Better Websites Using The Bootstrap Framework.</p>
                    <p>Let Us Join!</p>
                    <router-link to="/login" type="button" class="btn btn-outline-warning">Get Started</router-link>
                    </div>
              </div>
            </div>
          </div>
</template>
