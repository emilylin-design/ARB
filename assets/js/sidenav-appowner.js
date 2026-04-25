/**
 * Horizon Prototype — AppOwner Sidenav Component
 * Registers the IT Application Owner side navigation in window.HorizonComponents.
 * Used by pages under `prototype - app roadmap/`.
 * Include BEFORE interactions.js (no defer).
 */

window.HorizonComponents = window.HorizonComponents || {};

window.HorizonComponents['appowner-sidenav'] = `
<nav class="sidenav sidenav--collapsed sidenav--dark" id="sidenav-main" aria-label="AppOwner Workspace navigation">
  <div class="sidenav__header">
    <button class="sidenav__menu-btn" aria-label="Toggle navigation">
      <span data-icon="menu"></span>
    </button>
    <div class="sidenav__logo">
      <span class="sidenav__logo-text">AppOwner Workspace</span>
    </div>
  </div>

  <div class="sidenav__top">
    <div class="sidenav__nav">
      <button class="sidenav__item sidenav__item--active" title="Home">
        <span data-icon="home"></span>
        <span class="sidenav__item__label">Home</span>
      </button>
      <button class="sidenav__item" id="nav-recent-chats" title="Recent chats">
        <span data-icon="history"></span>
        <span class="sidenav__item__label">Recent chats</span>
      </button>
      <button class="sidenav__item" title="Notifications">
        <span data-icon="bell"></span>
        <span class="sidenav__item__label">Notifications</span>
      </button>
      <div class="sidenav__divider"></div>

      <button class="sidenav__item" title="My to-do">
        <span data-icon="checklist"></span>
        <span class="sidenav__item__label">My to-do</span>
      </button>

      <!-- My applications — expandable group -->
      <div class="sidenav__group">
        <button class="sidenav__item sidenav__group-toggle" title="My applications" aria-expanded="true">
          <span data-icon="layers-middle"></span>
          <span class="sidenav__item__label">My applications</span>
          <span class="sidenav__group-chevron" data-icon="chevron-up"></span>
        </button>
        <div class="sidenav__subnav">
          <a class="sidenav__subnav-item" href="AppOwner_myapps.html">My apps</a>
          <a class="sidenav__subnav-item" href="#">Health &amp; risk</a>
          <a class="sidenav__subnav-item" href="#">Tech debt</a>
        </div>
      </div>

      <!-- Roadmap — expandable group -->
      <div class="sidenav__group">
        <button class="sidenav__item sidenav__group-toggle" title="Roadmap" aria-expanded="true">
          <span data-icon="rocketship"></span>
          <span class="sidenav__item__label">Roadmap</span>
          <span class="sidenav__group-chevron" data-icon="chevron-up"></span>
        </button>
        <div class="sidenav__subnav">
          <a class="sidenav__subnav-item" href="AppOwner_roadmap.html">Roadmap view</a>
          <a class="sidenav__subnav-item" href="#">Releases</a>
          <a class="sidenav__subnav-item" href="#">Dependencies</a>
        </div>
      </div>

      <!-- Cost & licenses — expandable group -->
      <div class="sidenav__group">
        <button class="sidenav__item sidenav__group-toggle" title="Cost &amp; licenses" aria-expanded="true">
          <span data-icon="book-open"></span>
          <span class="sidenav__item__label">Cost &amp; licenses</span>
          <span class="sidenav__group-chevron" data-icon="chevron-up"></span>
        </button>
        <div class="sidenav__subnav">
          <a class="sidenav__subnav-item" href="#">TCO</a>
          <a class="sidenav__subnav-item" href="#">Contracts</a>
          <a class="sidenav__subnav-item" href="#">Renewals</a>
        </div>
      </div>

      <div class="sidenav__divider"></div>
      <button class="sidenav__item" title="Settings">
        <span data-icon="gear"></span>
        <span class="sidenav__item__label">Settings</span>
      </button>
    </div>
  </div>

  <div class="sidenav__bottom">
    <div class="sidenav__profile">
      <div class="sidenav__avatar">
        <div class="sidenav__avatar-img">SC</div>
        <div class="sidenav__avatar-status"></div>
      </div>
      <span class="sidenav__profile-name">Sarah Chen</span>
      <button class="sidenav__profile-more" aria-label="Profile options">
        <span data-icon="more-vertical"></span>
      </button>
    </div>
  </div>
</nav>
`;
