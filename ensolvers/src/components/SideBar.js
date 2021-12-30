export const SideBar = function (props) {
    return (
        <>
            <div id="id_sideBar">
                <nav >
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Ensolvers</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <ul class=" ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">To Do</a>
                            </li>
                        </ul>

                    </div>
                </nav>

            </div>
        </>
    )
}