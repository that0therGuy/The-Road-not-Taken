
document.querySelectorAll('.roadtaken').forEach((el) => {
    let prev_el,next_el = undefined;

    if (el.id > 0) {
        prev_el = parseInt(el.id) - 1
    }
    if (el.id<8){
        next_el= parseInt(el.id)+1
    }
    el.addEventListener('mouseenter', () => {

        el.style.transform = 'translateY(-10px) rotateZ(10deg)';


        if (prev_el){

            document.getElementById(prev_el).style.transform = 'translateY(-5px) rotateZ(-5deg) scale(0.9)';

        }
        if (next_el){
            document.getElementById(next_el).style.transform = 'translateY(-5px) rotateZ(5deg) scale(1.4)';

        }
    })
    el.addEventListener('mouseleave', () => {
        if (el.id==='0' || el.id==='9'){
            el.style.transform = 'translateY(5px)';

            if (prev_el){
                document.getElementById(prev_el).style.transform = 'translateY(0px)';
                console.log(prev_el)

            }
            if (next_el){
                document.getElementById(next_el).style.transform = 'translateY(0px)';

            }
        }else{
            el.style.transform = 'translateY(0px)';

            if (prev_el){
                document.getElementById(prev_el).style.transform = 'translateY(0px)';
                console.log(prev_el)

            }
            if (next_el){
                document.getElementById(next_el).style.transform = 'translateY(0px)';

            }
        }

    })





})