<?php 
    require_once('header.php');   
   
?>
<section id="text-to-voice" class="container">
    <div class="row">
        <div class="col-md-8">
            <?php if($toolname == 'text-to-speech-converter') { ?>
                <div class="py-3">
                    <h1>Title of the Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente repellat sequi quam doloremque voluptatem, accusantium consectetur dolore delectus cum nulla beatae sunt. Quas, architecto sit rem impedit nam beatae.</p>
                </div>
                <div class="card p-4 m-2">
                    <form method="post" action="../processdata">
                        <?php set_csrf() ?>
                        <textarea id="txt-to-voice" name="txt-to-voice" class="form-control shadow-sm" rows="5" placeholder="Type something here"></textarea>

                        <select class="custom-select custom-select my-3" name="tl">
                            <option value='en' selected>English</option>
                            <?php 
                            $sql = "SELECT * FROM lang_codes";
                                $res = $cn->query($sql);
                                if($res -> num_rows > 0)
                                {
                                    while ($row = $res->fetch_assoc())
                                    { ?>
                                    <option value=" <?php echo $row['code']; ?>"> <?php echo $row['name']; ?></option>
                                <?php  }
                                }
                            ?>
                            
                        </select>

                        <div class="py-2">
                            <button name="submit" class="btn btn-success" type="submit"><i class="fas fa-volume-up"></i>  Convert to Speech</button>
                            <button name="reset" class="btn btn-danger" type="reset"><i class="fas fa-sync-alt"></i>  Reset</button>
                        </div>
                    </form>
                    <br>
                    <?php
                    if (isset( $_SESSION['audioplayer']))
                    {
                        echo $_SESSION['audioplayer'];
                    }
                    ?>
                </div>
                <?php } elseif($toolname == 'find-and-replace') {
                    echo 'Find and replace';
                } ?>
        </div>
        <div class="col-md-4">
            <div class="py-4">
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<?php 
    require_once('footer.php');   
?>