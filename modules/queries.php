<?php

/**********************************
 *          INSERT QUERY
 *********************************/
function insdata($sql)
{
    global $cn;

    if ($cn->query($sql) === TRUE) {
        echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
                    <strong>Success!</strong>.
                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                    </button>
             </div>";
      } else {
        echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
        <strong>Error </strong>. $sql .'<br> ' . $cn->error.
        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
        </button>";
    }
}

 /**********************************
 *          DELETE QUERY
 *********************************/
function deldata($sql)
{
    global $cn;
    
    if ($cn->query($sql) === TRUE) {
        echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
        <strong>Success!</strong>.
        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
        </button>
        </div>";
    } else {
        echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
        <strong>Error </strong>. $sql .'<br> ' . $cn->error.
        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>";
    }
}

 /**********************************
 *          UPDATE QUERY
 *********************************/
function uptdata($sql)
{
    global $cn;
    
    if ($cn->query($sql) === TRUE) {
        echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
        <strong>Success!</strong>.
        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
        </button>
        </div>";
    } else {
        echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
        <strong>Error </strong>. $sql .'<br> ' . $cn->error.
        <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>";
    }
}


 /**********************************
 *          SELECT QUERY
 *********************************/
function get_lang_codes()
{
    global $cn;
    $sql = "SELECT * FROM lang_codes";
    // $res=mysqli_query($cn,$sql);
    // $data   = $res->fetch_all(MYSQLI_ASSOC);
    // $rowcount=mysqli_num_rows($res);
    // foreach($data as $row)
    // { 
        $res = $cn->query($sql);
        if($res -> num_rows > 0)
        {
            while ($row = $res->fetch_assoc())
            { ?>
    
            <option value=" <?php echo $row['code']; ?>"> <?php echo $row['name']; ?></option>
     
     <?php  }
        }
}
?>


        
    