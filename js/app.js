document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Realigned Dictionary Object: Matches your precise layout cards 1 through 4
    const stepContent = {
        "1": {
            icon: "📈",
            title: "Chart 1: Urban Expansion Curve",
            desc: "Visualizing the 10-year spike in commercial and residential density loading across the metropolitan sectors."
        },
        "2": {
            icon: "🏗️",
            title: "Chart 2: The Structural Loophole",
            desc: "A direct comparison of legally sanctioned structural floors versus the actual illegal vertical extensions built on-site."
        },
        "3": {
            icon: "🚨",
            title: "Chart 3: Inside the Fire Trap",
            desc: "Mapping the exact physical floor space layouts where massive room subdivisions trap residents during emergency crises."
        },
        "4": {
            icon: "📊",
            title: "Chart 4: National Fire Vulnerability Index",
            desc: "Overall vulnerability scores across major Indian metros, highlighting systemic emergency transit delays and deficits."
        }
    };

    // Grab the placeholder nodes
    const chartIcon = document.getElementById("chart-placeholder");
    const chartTitle = document.getElementById("chart-title");
    const chartDesc = document.getElementById("chart-desc");
    const steps = document.querySelectorAll(".scroll-step");

    // 2. Production Intersection Settings: Targets the sweet spot viewport window
    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -45% 0px", 
        threshold: 0.1
    };

    // 3. Execution Intersection Monitor Loop
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const stepId = entry.target.getAttribute("data-step");
            
            if (entry.isIntersecting) {
                // Dim down unselected elements, pop active element to full opacity
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1.02)";
                
                const activeData = stepContent[stepId];
                if (activeData) {
                    chartIcon.textContent = activeData.icon;
                    chartTitle.textContent = activeData.title;
                    chartDesc.textContent = activeData.desc;
                    console.log(`Successfully transitioned to Step ${stepId}`);
                }
            } else {
                // Dim down cards that exit the focus zone
                entry.target.style.opacity = "0.3";
                entry.target.style.transform = "scale(1.0)";
            }
        });
    }, observerOptions);

    // Bind monitor loop to step cards
    steps.forEach(step => scrollObserver.observe(step));
});