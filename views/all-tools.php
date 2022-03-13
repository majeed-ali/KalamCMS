<?php 
    require_once('header.php');   
   
?>
<section id="text-to-voice" class="container">
    <div class="row">
        <div class="col-md-8"> 
            <?php 
            //************** TEXT TO SPEECH CONVERTOR **************/
            if($toolname == 'text-to-speech-converter') { ?>
                    <div class="py-3">
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_content(); ?></p>
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
                <?php } 
                //************** FIND AND REPLACE TOOL **************/
                elseif($toolname == 'find-and-replace') { ?>
                    <form name="frm" class="border p-4 rounded bg-light mb-4 shadow">
                        <h3>Input Data <span class="text-danger">*</span></h3>
                        <div class="form-group">
                            <textarea class="form-control" rows="7" required="" placeholder="Type or paste your content here..." id="uInput"></textarea>
                        </div>
                        <h3>Output Data</h3>
                        <div class="form-group">
                            <textarea class="form-control" rows="7" required="" placeholder="Results will be shown here...." id="uOutput"></textarea>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header bg-success text-light" data-toggle="collapse" data-target="#fnr"><b>Find &amp; Replace Options</b> (<i>Click to collapse</i>)</div>
                            <div id="fnr" class="">
                                <div class="card-body">
                                    <div id="TextBoxesGroup" class="form-group show">
                                        <div id="TextBoxDiv1" class="row mb-3">
                                            <label class="col-lg-2 col-form-label">Find #1</label>
                                            <div class="col-lg-4"><input type="text" class="border rounded input-sm pl-1" placeholder="Find #1" id="findbox1"></div>
                                            <label class="col-lg-2 col-form-label">Replace #1</label>
                                            <div class="col-lg-4"><input type="text" class="border rounded input-sm pl-1" placeholder="Replace #1" id="replacebox1"></div>
                                        </div>
                                        <div id="TextBoxDiv2" class="row mb-3">
                                            <label class="col-lg-2 col-form-label">Find #2</label>
                                            <div class="col-lg-4"><input type="text" class="border rounded input-sm pl-1" placeholder="Find #2" id="findbox2"></div>
                                            <label class="col-lg-2 col-form-label">Replace #2</label>
                                            <div class="col-lg-4"><input type="text" class="border rounded input-sm pl-1" placeholder="Replace #2" id="replacebox2"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-lg-4"><button type="button" id="addbtn" class="btn btn-success btn-block"><i class="fas fa-plus mr-2"></i> Add Element</button></div>
                                        <div class="form-group col-lg-4"><button type="button" id="repbtn" class="btn btn-danger btn-block"><i class="fas fa-trash-alt mr-2"></i> Remove Element</button></div>
                                        <div class="form-group col-lg-4"><button type="reset" id="reset" class="btn btn-warning btn-block"><i class="fas fa-sync mr-2"></i> Reset</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-lg-12"><button type="button" id="fnrbtn" class="btn btn-primary btn-lg btn-block"><i class="fas fa-pen mr-2"></i> Find &amp; Replace</button></div>
                        </div>
                        </form>
                <?php } 
                //************** TEXT CASE CONVERTOR **************/
                elseif($toolname == 'text-case-converter') {?>
                    <div class="py-3">
                        <h1><?php the_title(); ?></h1>
                        <p><?php the_content(); ?></p>
                    </div>
                    <div class="card p-4 m-2">
                        <textarea id="txt-convert-case" name="txt-convert-case" class="form-control shadow-sm" rows="5" placeholder="Type something here"></textarea>
                            <div class="py-2">
                                <button name="upper" id="upper" class="btn btn-success" ><i class="far fa-arrow-alt-circle-up"></i>  UPPER CASE</button>
                                <button name="lower" id="lower" class="btn btn-primary" ><i class="far fa-arrow-alt-circle-down"></i>  lower case</button>
                                <button name="titlecase" id="titlecase" class="btn btn-info" onclick=""><i class="fas fa-text-height"></i> Title Case</button>
                                <button name="reset" id="reset-txt-convert-case" class="btn btn-danger"><i class="fas fa-sync-alt"></i>  RESET</button>
                            </div>
                    </div>
                    <?php } elseif($toolname == 'character-word-count-tool'){ ?>
                        <div class="py-3">
                            <h1><?php the_title(); ?></h1>
                            <p><?php the_content(); ?></p>
                        </div>
                        <div class="card p-4 m-2">
                        <h5 id="cc_data">Total Characters: <mark>[0]</mark>, Total Words: <mark>[0]</mark> and Line Count: <mark>[0]</mark></h5>
                            <textarea id="word-count" name="word-count" class="form-control shadow-sm" rows="5" placeholder="Type something here"></textarea>

                            <button type="reset-word-count" id="reset-word-count" class="btn btn-danger btn-block mt-2"><i class="fas fa-sync mr-2"></i> Reset</button>
                        </div>
                    <?php } ?>
                </div>
                <!--************ SIDEBAR ************* -->
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
                <!--************ SIDEBAR END ************* -->
        </div>
</section>

<?php 
    require_once('footer.php');   
?>