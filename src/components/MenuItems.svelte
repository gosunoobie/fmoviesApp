
      <script>

        export let item = '';
      </script>
<li><a href="/{item}">{item}</a></li>


<style>
    li{
    list-style: none;
    border-radius: 6px;
    cursor: pointer;
    }

    a{
    font-size: .9rem;
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    color: #d5d5d5;
    width: 100%;
    height: 100%;    
    }

    li:hover{
background: #16181b;
  }

  li:hover a{
    color: #00acc1;
  }
</style>