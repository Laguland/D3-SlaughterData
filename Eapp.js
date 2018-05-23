var chart_width     =   1500;
var chart_height    =   820;
//[{Year: 0, type: {name: '',value:0}}]
d3.csv('slaughter.csv', function (error, data) {
    data.forEach(function (data) {
        data.Year = +data.Year;
        data.Calves = +data.Calves;
        data.Steers = +data.Steers;
        data.Heifers = +data.Heifers;
        data.YoungBulls = +data.YoungBulls;
        data.AdultCows = +data.AdultCows;
        data.AdultBulls = +data.AdultBulls;
        data.SheepAndLambs = +data.SheepAndLambs;
        data.EwesAndRams = +data.EwesAndRams;
        data.CleanPigs = +data.CleanPigs;
        data.SowsAndBoars = +data.SowsAndBoars;
    });
    console.log(data);

    var bCalves = false;
    var bSteers = false;
    var bHeifers = false;
    var bYoungBulls = false;
    var bAdultCows = false;
    var bAdultBulls = false;
    var bSheepAndLambs = false;
    var bEwesAndRams = false;
    var bCleanPigs = false;
    var bSowsAndBoars = false;

    var color = d3.scaleOrdinal().range(['#E53935', '#D81B60','#8E24AA','#5E35B1','#3949AB','#1E88E5','#00897B','#43A047','#C0CA33','#F4511E','#6D4C41','#757575']).domain([data.columns]);

    // create svg for bar chart
    var scatterSVG = d3.select('#chart').append('svg')
        .attr('width', 1500)
        .attr('height', 720);

    // create x scale
    var x = d3.scaleBand().rangeRound([0, 1400, 0.1])
        .domain(data.map(function (d) {
            return d.Year;
        }));

    // add x scale to svg
    scatterSVG.append('g').attr('class', 'x-axis')
        .attr('transform', 'translate(40,700)')
        .call(d3.axisBottom(x));

    // create y scale
    var y = d3.scaleLinear().range([690, 0])
        .domain([0, 20000]);

    scatterSVG.append('g').attr('class', 'y-axis')
        .attr('transform', 'translate(40,10)')
        .call(d3.axisLeft(y));

    // create scatter plot groups
    scatterSVG.selectAll('.scatter')
        .append('g')
        .attr('class','scatter');

    // =============================================================== Create dots for all animals

    // Create Calves dots
    var dotCalves = scatterSVG.selectAll('.dot-Calves')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-Calves')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.Calves);
        })
        .attr('fill', 'white');

    // Create Steers dots
    var dotSteer = scatterSVG.selectAll('.dot-Steer')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-Steer')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.Steers);
        })
        .attr('fill', 'white');

    // Create Heifers dots
    var dotHeifers = scatterSVG.selectAll('.dot-Heifer')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-Heifer')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.Heifers);
        })
        .attr('fill', 'white');

    // Create Young Bulls dots
    var dotYoungBulls = scatterSVG.selectAll('.dot-YoungBull')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-YoungBull')
        .attr('transform','translate(57,10)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.YoungBulls);
        })
        .attr('fill', 'white');

    // Create Adult Cows dots
    var dotAdultCows = scatterSVG.selectAll('.dot-AdultCow')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-AdultCow')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.AdultCows);
        })
        .attr('fill', 'white');

    // Create Adult Bulls dots
    var dotAdultBulls = scatterSVG.selectAll('.dot-AdultBull')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-AdultBull')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.AdultBulls);
        })
        .attr('fill', 'white');

    // Create Sheep And Lambs dots
    var dotSheepAndLambs = scatterSVG.selectAll('.dot-SheepAndLamb')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-SheepAndLamb')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.SheepAndLambs);
        })
        .attr('fill', 'white');

    // Create Ewes And Ram dots
    var dotEwesAndRams = scatterSVG.selectAll('.dot-EwesAndRam')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-EwesAndRam')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.EwesAndRams);
        })
        .attr('fill', 'white');

    // Create Clean Pigs dots
    var dotCleanPigs = scatterSVG.selectAll('.dot-CleanPig')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-CleanPig')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.CleanPigs);
        })
        .attr('fill', 'white');

    // Create Sows And Boars dots
    var dotSowsAndBoars = scatterSVG.selectAll('.dot-SowsAndBoar')
        .data(data)
        .enter()
        .append('circle')
        .attr('class','dot-SowsAndBoar')
        .attr('transform','translate(57,0)')
        .attr('r', 3)
        .attr('cx', function (d) {
            return x(d.Year);
        })
        .attr('cy', function (d) {
            return y(d.SowsAndBoars);
        })
        .attr('fill', 'white');

    //=============================================================== END

    //=============================================================== Create Legend

    // Create legend
    var legendSVG = d3.select('#chart')
        .append('svg')
        .attr('width', chart_width)
        .attr('height', 100);

    // Calves legend
    var legCalves = legendSVG.append('g')
        .attr('class','leg-Calves')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 20)
        .attr('y', 40)
        .attr('fill', color(data.columns[1]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.Calves)
                });

            if(bCalves) {
                scatterSVG.selectAll('#path-Calves')
                    .remove();

                dotCalves.attr('fill','none');
                legCalves.attr('stroke-width', 0);

                bCalves = false;
                ChangeScale(data);
            }
            else {
                bCalves = true;
                ChangeScale(data);

                legCalves.attr('stroke-width', 3);
                legCalves.attr('stroke','black');

                dotCalves.attr('fill',color('Calves'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-Calves')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('Calves'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-Calves')
        .append('text')
        .text('Calves')
        .attr('x', 65)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Steers legend
    var legSteers = legendSVG.append('g')
        .attr('class','leg-Steers')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 100)
        .attr('y', 40)
        .attr('fill', color(data.columns[2]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.Steers)
                });

            if(bSteers) {
                scatterSVG.selectAll('#path-Steers')
                    .remove();

                dotSteer.attr('fill','none');
                legSteers.attr('stroke-width', 0);

                bSteers = false;
                ChangeScale(data);
            }
            else {
                bSteers = true;
                ChangeScale(data);

                legSteers.attr('stroke-width', 3);
                legSteers.attr('stroke','black');

                dotSteer.attr('fill',color('Steers'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-Steers')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('Steers'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-Steers')
        .append('text')
        .text('Steers')
        .attr('x', 145)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Heifers legend
    var legHeifers = legendSVG.append('g')
        .attr('class','leg-Heifers')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 180)
        .attr('y', 40)
        .attr('fill', color(data.columns[3]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.Heifers)
                });

            if(bHeifers) {
                scatterSVG.selectAll('#path-Heifers')
                    .remove();

                dotHeifers.attr('fill','none');
                legHeifers.attr('stroke-width', 0);

                bHeifers = false;
                ChangeScale(data);
            }
            else {
                bHeifers = true;
                ChangeScale(data);

                legHeifers.attr('stroke-width', 3);
                legHeifers.attr('stroke','black');

                dotHeifers.attr('fill',color('Heifers'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-Heifers')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('Heifers'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-Heifers')
        .append('text')
        .text('Heifers')
        .attr('x', 230)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Young Bulls legend
    var legYBulls = legendSVG.append('g')
        .attr('class','leg-YBulls')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 260)
        .attr('y', 40)
        .attr('fill', color(data.columns[4]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.YoungBulls)
                });

            if(bYoungBulls) {
                scatterSVG.selectAll('#path-YBull')
                    .remove();

                dotYoungBulls.attr('fill','none');
                legYBulls.attr('stroke-width', 0);

                bYoungBulls = false;
                ChangeScale(data);
            }
            else {
                bYoungBulls = true;
                ChangeScale(data);

                legYBulls.attr('stroke-width', 3);
                legYBulls.attr('stroke','black');

                dotYoungBulls.attr('fill',color('YoungBulls'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-YBull')
                    .attr('transform', 'translate(57,10)')
                    .attr('fill', 'none')
                    .attr('stroke', color('YoungBulls'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(2000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-YBulls')
        .append('text')
        .text('Young Bulls')
        .attr('x', 325)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Adult Cows legend
    var legACows = legendSVG.append('g')
        .attr('class','leg-ACows')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 370)
        .attr('y', 40)
        .attr('fill', color(data.columns[5]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.AdultCows)
                });

            if(bAdultCows) {
                scatterSVG.selectAll('#path-ACow')
                    .remove();

                dotAdultCows.attr('fill','none');
                legACows.attr('stroke-width', 0);

                bAdultCows = false;
                ChangeScale(data);
            }
            else {
                bAdultCows = true;
                ChangeScale(data);

                legACows.attr('stroke-width', 3);
                legACows.attr('stroke','black');

                dotAdultCows.attr('fill',color('AdultCows'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-ACow')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('AdultCows'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-ACows')
        .append('text')
        .text('Adult Cows')
        .attr('x', 435)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Adult Bulls legend
    var legABulls = legendSVG.append('g')
        .attr('class','leg-ABulls')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 480)
        .attr('y', 40)
        .attr('fill', color(data.columns[6]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.AdultBulls)
                });

            if(bAdultBulls) {
                scatterSVG.selectAll('#path-ABull')
                    .remove();

                dotAdultBulls.attr('fill','none');
                legABulls.attr('stroke-width', 0);

                bAdultBulls = false;
                ChangeScale(data);
            }
            else {
                bAdultBulls = true;
                ChangeScale(data);

                legABulls.attr('stroke-width', 3);
                legABulls.attr('stroke','black');

                dotAdultBulls.attr('fill',color('AdultBulls'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-ABull')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('AdultBulls'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-ABulls')
        .append('text')
        .text('Adult Bulls')
        .attr('x', 545)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Sheep And Lambs legend
    var legSAL = legendSVG.append('g')
        .attr('class','leg-SAL')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 590)
        .attr('y', 40)
        .attr('fill', color(data.columns[7]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.SheepAndLambs)
                });

            if(bSheepAndLambs) {
                scatterSVG.selectAll('#path-SAL')
                    .remove();

                dotSheepAndLambs.attr('fill','none');
                legSAL.attr('stroke-width', 0);

                bSheepAndLambs = false;
                ChangeScale(data);
            }
            else {
                bSheepAndLambs = true;
                ChangeScale(data);

                legSAL.attr('stroke-width', 3);
                legSAL.attr('stroke','black');

                dotSheepAndLambs.attr('fill',color('SheepAndLambs'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-SAL')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('SheepAndLambs'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-SAL')
        .append('text')
        .text('Sheeps and Lambs')
        .attr('x', 675)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Ewes And Ram legend
    var legEAR = legendSVG.append('g')
        .attr('class','leg-EAR')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 740)
        .attr('y', 40)
        .attr('fill', color(data.columns[8]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.EwesAndRams)
                });

            if(bEwesAndRams) {
                scatterSVG.selectAll('#path-EAR')
                    .remove();

                dotEwesAndRams.attr('fill','none');
                legEAR.attr('stroke-width', 0);

                bEwesAndRams = false;
                ChangeScale(data);
            }
            else {
                bEwesAndRams = true;
                ChangeScale(data);

                legEAR.attr('stroke-width', 3);
                legEAR.attr('stroke','black');

                dotEwesAndRams.attr('fill',color('EwesAndRams'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-EAR')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('EwesAndRams'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-EAR')
        .append('text')
        .text('Ewes and Rams')
        .attr('x', 815)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Clean Pigs legend
    var legCPigs = legendSVG.append('g')
        .attr('class','leg-CPigs')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 870)
        .attr('y', 40)
        .attr('fill', color(data.columns[9]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.CleanPigs)
                });

            if(bCleanPigs) {
                scatterSVG.selectAll('#path-CPig')
                    .remove();

                dotCleanPigs.attr('fill','none');
                legCPigs.attr('stroke-width', 0);

                bCleanPigs = false;
                ChangeScale(data);
            }
            else {
                bCleanPigs = true;
                ChangeScale(data);

                legCPigs.attr('stroke-width', 3);
                legCPigs.attr('stroke','black');

                dotCleanPigs.attr('fill',color('CleanPigs'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-CPig')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('CleanPigs'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-CPigs')
        .append('text')
        .text('Clean Pigs')
        .attr('x', 930)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    // Sows And Boars legend
    var legSAB = legendSVG.append('g')
        .attr('class','leg-SAB')
        .append('rect')
        .attr('width', 20)
        .attr('height', 20)
        .attr('x', 970)
        .attr('y', 40)
        .attr('fill', color(data.columns[10]))
        .on('click',function () {
            var line = d3.line()
                .x(function (d){
                    return x(d.Year)
                })
                .y(function (d){
                    return y(d.SowsAndBoars)
                });

            if(bSowsAndBoars) {
                scatterSVG.selectAll('#path-SAB')
                    .remove();

                dotSowsAndBoars.attr('fill','none');
                legSAB.attr('stroke-width', 0);

                bSowsAndBoars = false;
                ChangeScale(data);
            }
            else {
                bSowsAndBoars = true;
                ChangeScale(data);

                legSAB.attr('stroke-width', 3);
                legSAB.attr('stroke','black');

                dotSowsAndBoars.attr('fill',color('SowsAndBoars'));

                var path = scatterSVG.append('path')
                    .datum(data)
                    .attr('id','path-SAB')
                    .attr('transform', 'translate(57,0)')
                    .attr('fill', 'none')
                    .attr('stroke', color('SowsAndBoars'))
                    .attr('stroke-linejoin', 'round')
                    .attr('stroke-linecap', 'round')
                    .attr('stroke-width', 1.5)
                    .attr('d', line);

                var totalLength = path.node().getTotalLength();

                path.attr('stroke-dasharray', totalLength + " " + totalLength)
                    .attr('stroke-dashoffset', totalLength)
                    .transition()
                    .duration(4000)
                    .ease(d3.easeLinear)
                    .attr('stroke-dashoffset', 0);
            }
        });

    legendSVG.select('.leg-SAB')
        .append('text')
        .text('Sows And Boars')
        .attr('x', 1050)
        .attr('y', 55)
        .attr('text-anchor', 'middle');

    //=============================================================== END

    function ChangeScale(d) {

        var maxArray = [];

        var maxCalves = d3.max(d.map(function(d){
            return d.Calves;
        }));
        var maxSteers = d3.max(d.map(function(d){
            return d.Steers;
        }));
        var maxHeifers = d3.max(d.map(function(d){
            return d.Heifers;
        }));
        var maxYBulls = d3.max(d.map(function(d){
            return d.YoungBulls;
        }));
        var maxACows = d3.max(d.map(function(d){
            return d.AdultCows;
        }));
        var maxABulls = d3.max(d.map(function(d){
            return d.AdultBulls;
        }));
        var maxSEL = d3.max(d.map(function(d){
            return d.SheepAndLambs;
        }));
        var maxEAR = d3.max(d.map(function(d){
            return d.EwesAndRams;
        }));
        var maxCPigs = d3.max(d.map(function(d){
            return d.CleanPigs;
        }));
        var maxSAB = d3.max(d.map(function(d){
            return d.SowsAndBoars;
        }));

        if(bCalves) {
            maxArray.push(maxCalves);
        }
        if(bSteers) {
            maxArray.push(maxSteers);
        }
        if(bHeifers) {
            maxArray.push(maxHeifers);
        }
        if(bYoungBulls) {
            maxArray.push(maxYBulls);
        }
        if(bAdultCows) {
            maxArray.push(maxACows);
        }
        if(bAdultBulls) {
            maxArray.push(maxABulls);
        }
        if(bSheepAndLambs) {
            maxArray.push(maxSEL);
        }
        if(bEwesAndRams) {
            maxArray.push(maxEAR);
        }
        if(bCleanPigs) {
            maxArray.push(maxCPigs);
        }
        if(bSowsAndBoars) {
            maxArray.push(maxSAB);
        }

        if(!bCalves && !bSteers && !bHeifers && !bYoungBulls && !bAdultCows && !bAdultBulls && !bSheepAndLambs && !bEwesAndRams && !bCleanPigs && !bSowsAndBoars) {
            maxArray.push(20000);
        }

        y.domain([0,d3.max(maxArray)]);

        scatterSVG.selectAll('.y-axis')
            .transition()
            .duration(1000)
            .call(d3.axisLeft(y));

        // update dots and paths
        if(bCalves) {
            var lineCalves = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.Calves);
                });

            scatterSVG.selectAll('.dot-Calves')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.Calves);
                });

            scatterSVG.selectAll('#path-Calves')
                .transition()
                .duration(1000)
                .attr('d', lineCalves);
        }
        if(bSteers) {
            var lineSteers = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.Steers);
                });

            scatterSVG.selectAll('.dot-Steer')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.Steers);
                });

            scatterSVG.selectAll('#path-Steers')
                .transition()
                .duration(1000)
                .attr('d', lineSteers);
        }
        if(bHeifers) {
            var lineHeifers = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.Heifers);
                });

            scatterSVG.selectAll('.dot-Heifer')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.Heifers);
                });

            scatterSVG.selectAll('#path-Heifers')
                .transition()
                .duration(1000)
                .attr('d', lineHeifers);
        }
        if(bYoungBulls) {
            var lineYBulls = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.YoungBulls);
                });

            scatterSVG.selectAll('.dot-YoungBull')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.YoungBulls);
                });

            scatterSVG.selectAll('#path-YBull')
                .transition()
                .duration(1000)
                .attr('d', lineYBulls);
        }
        if(bAdultCows) {
            var lineACow = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.AdultCows);
                });

            scatterSVG.selectAll('.dot-AdultCow')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.AdultCows);
                });

            scatterSVG.selectAll('#path-ACow')
                .transition()
                .duration(1000)
                .attr('d', lineACow);
        }
        if(bAdultBulls) {
            var lineABull = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.AdultBulls);
                });

            scatterSVG.selectAll('.dot-AdultBull')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.AdultBulls);
                });

            scatterSVG.selectAll('#path-ABull')
                .transition()
                .duration(1000)
                .attr('d', lineABull);
        }
        if(bSheepAndLambs) {
            var lineSAL = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.SheepAndLambs);
                });

            scatterSVG.selectAll('.dot-SheepAndLamb')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.SheepAndLambs);
                });

            scatterSVG.selectAll('#path-SAL')
                .transition()
                .duration(1000)
                .attr('d', lineSAL);
        }
        if(bEwesAndRams) {
            var lineEAR = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.EwesAndRams);
                });

            scatterSVG.selectAll('.dot-EwesAndRam')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.EwesAndRams);
                });

            scatterSVG.selectAll('#path-EAR')
                .transition()
                .duration(1000)
                .attr('d', lineEAR);
        }
        if(bCleanPigs) {
            var lineCPig = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.CleanPigs);
                });

            scatterSVG.selectAll('.dot-CleanPig')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.CleanPigs);
                });

            scatterSVG.selectAll('#path-CPig')
                .transition()
                .duration(1000)
                .attr('d', lineCPig);
        }
        if(bSowsAndBoars) {
            var lineSAB = d3.line()
                .x(function (data){
                    return x(data.Year);
                })
                .y(function (data){
                    return y(data.SowsAndBoars);
                });

            scatterSVG.selectAll('.dot-SowsAndBoar')
                .transition()
                .duration(1000)
                .attr('cy', function (d) {
                    return y(d.SowsAndBoars);
                });

            scatterSVG.selectAll('#path-SAB')
                .transition()
                .duration(1000)
                .attr('d', lineSAB);
        }
    }
});