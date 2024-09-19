let os=document.getElementById('os')


function display(txt)
{
    os.value=os.value+txt;
}
function clr()
{
    os.value = ""
}
function del()
{
    os.value=os.value.slice(0,-1);
}
function sqr()
{
    os.value=os.value += "sqrt(";
}
function log()
{
    os.value += "log(";
}
function calculat()
{
    os.value=eval(os.value);
}