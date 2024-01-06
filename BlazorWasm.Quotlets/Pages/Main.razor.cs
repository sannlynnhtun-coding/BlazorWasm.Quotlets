using BlazorWasm.Quotlets.Models;
using Microsoft.JSInterop;
using MudBlazor;

namespace BlazorWasm.Quotlets.Pages
{
    public partial class Main
    {
        private QuotletsResponseModel? QuotletsData { get; set; }
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await Init(1);
            }
        }

        private async Task LoadJavaScript()
        {
            await Task.Delay(1000);
            await JsRuntime.InvokeVoidAsync("loadJs", new string[] 
            {
                "assets/js/switch.js",
                "assets/js/main.js"
            }.ToList());
        }

        private async Task PageChanged(int pageNo)
        {
            await Init(pageNo);
        }

        private async Task Init(int pageNo)
        {
            QuotletsData = await Service.GetQuotlets(pageNo);
            StateHasChanged();
            await LoadJavaScript();
        }
    }
}
